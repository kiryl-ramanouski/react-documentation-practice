'use strict';

const elem = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  // render with classical JavaScript
  // render() {
  //   if (this.state.liked) {
  //     return 'You liked comment number ' + this.props.commentid;
  //   }

  //   return elem(
  //     'button',
  //     { onClick: () => this.setState({ liked: true }) },
  //     'Like'
  //   );
  // }

  // render with modern JSX
  render() {
    if (this.state.liked) {
      return <p>You liked comment number {this.props.commentid}</p>;
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container').forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  const commentid = parseInt(domContainer.dataset.commentid, 10);
  const root = ReactDOM.createRoot(domContainer);
  root.render(elem(LikeButton, { commentid: commentid }));
});
