class TodoHeader extends React.Component {

    componentWillMount() {console.log("TodoHeader componentWillMount")}
    componentDidMount() {console.log("TodoHeader componentDidMount")}
    componentWillReceiveProps(){console.log("TodoHeader componentWillReceiveProps")}
    // shouldComponentUpdate(){console.log("TodoHeader shouldComponentUpdate")}
    componentWillUpdate(){console.log("TodoHeader componentWillUpdate")}
    componentDidUpdate(){console.log("TodoHeader componentDidUpdate")}
    componentWillUnmount(){console.log("TodoHeader componentWillUnmount")}
    
    render() {
      const {
        title,
        username,
        todoCount
      } = this.props;
      return (
        <div>
          <h1>{title}</h1>
          <span>Hello，{username}：u have {todoCount} unfinished items</span>
        </div>
      );
    }
  }
  
  TodoHeader.propTypes = {
    title: React.PropTypes.string,
    username: React.PropTypes.string,
    todoCount: React.PropTypes.number
  };
  
//   TodoHeader.defaultProps = {
//     title: '我的待辦清單',
//     username: 'Guest',
//     todoCount: 0
//   };
  
  window.App.TodoHeader = TodoHeader;
  