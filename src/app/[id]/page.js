const Home = async ({ params }) => {
  const pokemon = await fetch(`http://localhost:3000/api/pokemon/${params.id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return <main>Pokemon Name: {pokemon.name}</main>;
};

export default Home;
