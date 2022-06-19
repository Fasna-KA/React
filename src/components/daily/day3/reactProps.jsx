//Props in child

const ReactProps = (props) => {
    // const {name,id} = props

  return (
    <>
      <h1>Props Child:{props.name}</h1>
      <h2>id:{props.id}</h2>
      <h2>Fruits Name:{props.fname}</h2>
      {/* <h1>Props Child:{name}</h1>
      <h2>id:{id}</h2> */}
    </>
  );
};

export default ReactProps;
