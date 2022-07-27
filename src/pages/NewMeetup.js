import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-toturial-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      // fetch will send a get request, so we put a function to do a POST request
      ).then (() => {
        history.replace('/');
      });
  }

  return (
     <section>
      <h1>Adicionar reunião</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
     </section>
  );
}

export default NewMeetupPage;