const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { id } = this.props;

        return <Fragment>
            <div class="card">
                <div class="card-content">
                <script src="https://ads-partners.coupang.com/g.js"></script>
                <script dangerouslySetInnerHTML={{__html: `new PartnersCoupang.G({ id:330412 });`}}></script>
                </div>
            </div>
        </Fragment>;
    }
};
