import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCompetitions, sourceSelected, searchTermChanged, competitionClicked, login } from '../actions/index';
import _ from 'lodash';
import CompetitionListItem from '../components/competition_list_item';

class CompetitionList extends Component {

    componentDidMount() {
        this.props.fetchCompetitions();
    }

    renderList() {
        return this.props.competitions.map((competition) => {
            return (
                <CompetitionListItem key={competition.uri} value={competition} />
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div id="content" className="row">
                    <div id="collectionpage">
                        <div className="collection-description">
                            <h1></h1>
                            <div className="rte"></div>
                        </div>
                        <div className="clear"></div>
                        <div id="product-loop" className="desktop-12 mobile-3">
                            {this.renderList()}
                        </div>
                    </div>
                </div>
            </div>
        );

    }
};

const applyFilters = (competitions, filters, term) => {

    var comps = competitions;

    if (filters.length) {
        comps = _.filter(competitions, function (c) {
            if (_.indexOf(_.map(filters, 'name'), c.source) > -1)
                return c;
        });
    }

    term = term.toLowerCase().trim();
    if (term.length) {
        comps = _.filter(comps, function (c) {
            return c.title.toLowerCase().match(term);
        });
    }

    return comps;
}

function mapStateToProps(state) {
    console.log('STATE IN LIST ', state);
    return {
        competitions: applyFilters(state.competitions, state.filters, state.searchTerm),
        isAuthorised: state.user != null ? true : false,
        activeCompetition: state.activeCompetition
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCompetitions, sourceSelected, searchTermChanged, competitionClicked, login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionList);


//  this.props.searchTermChanged(term);
//         console.log('clicked ', this.props.value.uri);
//         if (this.state.isAuthorised) {
//             console.log('THIS ', this);
//         }
//         else {
//             console.log("THIS PROPS ", this.props);
//             console.log("THIS CONTEXT ", this.context);
//             this.props.history.push('/login');
//             // this.context.router.history.push('/login');
//         }