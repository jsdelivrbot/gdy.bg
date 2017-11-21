import React from 'react';
import SocialShare from '../components/social_share';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { trackEntry } from '../actions/index';

class CompetitionListItem extends React.Component {

    click() {
        this.props.trackEntry({
            userId: this.props.userId,
            userName: this.props.userName,
            uri: this.props.value.uri
        }, this.props.isAuthenticated);
    }

    render() {
        let comp = this.props.value;
        return (
            <li className="c-card-list__item js-c-card-list__item ">
                <article className="c-card c-card--hero">
                    <a onClick={this.click.bind(this)}
                        className="c-card__link c-card__link--article ">
                        {comp.title}
                    </a>

                    <div className="c-card__obj">
                        <div className="c-card__obj__header">
                            <div className="c-card__images">

                                <div className="c-card__image c-card__image--picture ">
                                    {/* <img src={comp.img} className="global__image img-lazyload" /> */}

                                    <img src={comp.img}/>
                                </div>
                            </div>
                        </div>

                        <div className="c-card__obj__body">
                            <div className="c-card__header">

                                <h3 className="c-card__title">
                                    <span>{comp.title}</span>
                                </h3>


                                <hr className="c-card__separator" />
                            </div>

                            <div className="c-card__footer">

                                <p className="c-card__byline">
                                    <span className="c-card__byline-prefix">By</span>
                                    <span className="c-card__byline-name">{comp.source}</span>
                                </p>

                                <ul className="global__list-reset c-card__meta ">
                                    <li className="c-card__meta-item  c-card__meta-item--date">
                                        <span className="">{comp.daysToEnter} days left to enter</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user.id,
        userName: state.user.name,
        isAuthenticated: state.user.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ trackEntry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionListItem);