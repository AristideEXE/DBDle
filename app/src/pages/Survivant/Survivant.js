import CharacterSelect from "../../components/CharacterSelect/CharacterSelect";

const Survivant = () => {
  return (
    <>
      <h1>Survivant</h1>
      <CharacterSelect
        options={[
          { id: "1", nom: "Meg Thomas" },
          { id: "2", nom: "Jake Park" },
          { id: "3", nom: "Kate Denson" },
        ]}
      />
    </>
  );
};

export default Survivant;
