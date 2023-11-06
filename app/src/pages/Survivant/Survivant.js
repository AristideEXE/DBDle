import CharacterSelect from "../../components/CharacterSelect/CharacterSelect";

const Survivant = () => {
  return (
    <div className="md:w-1/2 w-full flex justify-center">
      <CharacterSelect
        options={[
          { id: "1", nom: "Meg Thomas" },
          { id: "2", nom: "Jake Park" },
          { id: "3", nom: "Kate Denson" },
        ]}
      />
    </div>
  );
};

export default Survivant;
