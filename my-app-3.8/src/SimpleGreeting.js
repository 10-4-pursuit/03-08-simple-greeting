function SimpleGreeting(props) {
  return <h1> Hello, {props.name} welcome to React!</h1>;
}

const element = <SimpleGreeting name="Andree" />;

function FormerGreeting() {
  return (
    <div>
      {element} 
      
    </div>
  );
}

export default FormerGreeting;
