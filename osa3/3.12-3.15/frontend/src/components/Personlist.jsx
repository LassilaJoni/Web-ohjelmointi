import React from "react";
import Person from "./Person";

export default function Personlist({ persons, deletePerson }) {
  console.log("persons", persons);
  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          <Person person={person} />
          <button onClick={() => deletePerson(person.id, person.name)}>
            delete
          </button>
        </div>
      ))}
    </>
  );
}
