class Product extends Component {

    comment(input, anonymous){
        //input param and anonymous mode will be passed from comment module
        // do something. ex: ProductActions.comment(this.props.product.id, input, anonymous);
    }

    render() {
        let comments = this.props.product.comments === undefined ? [] : this.props.product.comments;
        return (
            <div>
                <div className="row">
                    <div className="column"></div>
                    <div className="column">
                        <Comment comments={comments} onSubmit={this.comment.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}
