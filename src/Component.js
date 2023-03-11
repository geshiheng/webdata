import { database } from "./firebaseConfig";

class YourComponent extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    database.ref("your-data-path").on("value", (snapshot) => {
      this.setState({
        data: snapshot.val(),
      });
    });
  }

  render() {
    return <div>{JSON.stringify(this.state.data)}</div>;
  }
}
