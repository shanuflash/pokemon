const Home = async () => {
  const pokemon = await fetch("http://localhost:3000/api/pokemon/")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <main>
      Pokemon List:
      <ul>
        {pokemon?.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
