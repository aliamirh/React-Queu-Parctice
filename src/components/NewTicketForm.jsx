import React from 'react';

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
          <br></br>
        <textarea
          id='issue'
          rows='6'
          cols='40'
          placeholder='Describe your issue. Please if i put more words in'/>
          <br></br>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;