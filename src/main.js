import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <div>
        <main>
          <HornedBeast title="Rhino" url="https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmhpbm98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="Rhino" description="A rhinoceros, commonly abbreviated to rhino, is a member of any of the five extant species of odd-toed ungulates in the family Rhinocerotidae"/>
        </main>
      </div>
    );
  }
}

export default Main;
