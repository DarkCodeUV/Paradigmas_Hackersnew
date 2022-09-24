import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { LINKS_PER_PAGE } from '../constants';
import { FEED_QUERY } from './LinkList';


const CREATE_LINK_MUTATION = gql`
  mutation CreateContactInformation(
    $icon : String!
    $title : String!
    $contact : String!
  ) {
    createContactInformation(description: $description, url: $url) {
      icon
      title
      contact
    }
  }
`;

const CreateLink = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    icon : '',
    title : '',
    contact : ''
  });


 const [createContactInformation] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      icon : formState.icon,
      title : formState.title,
      contact : formState.contact
    },
    update: (cache, { data: { post } }) => {
      const take = LINKS_PER_PAGE;
      const skip = 0;
      const orderBy = { createdAt: 'desc' };

      const data = cache.readQuery({
        query: FEED_QUERY,
        variables: {
          take,
          skip,
          orderBy
        }
      });

      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            contactInformation: [post, ...data.feed.contactInformation]
          }
        },
        variables: {
          take,
          skip,
          orderBy
        }
      });
    },
    onCompleted: () => history.push('/new/1')
  });



//Crea funcion para lmandar a otro componente
  function clickHistory(){
    history.push("/");
    window.location.reload()
  }
  function refreshPage(){
    window.location.reload()
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createContactInformation();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.icon}
            onChange={(e) =>
              setFormState({
                ...formState,
                icon: e.target.value
              })
            }
            type="text"
            placeholder="Icon"
          />
          <input
            className="mb2"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value
              })
            }
            type="text"
            placeholder="Title"
          />
          <input
            className="mb2"
            value={formState.contact}
            onChange={(e) =>
              setFormState({
                ...formState,
                contact: e.target.value
              })
            }
            type="text"
            placeholder="Contact"
          />
        </div>
        <button type="submit"  onClick={ () => {
        createContactInformation()
          clickHistory() //Se llama a la funcion

        } }>New Contanct Information</button>
      </form>

      


      <form
        onSubmit={(e) => {
          e.preventDefault();
          createContactInformation();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.dateStarted}
            onChange={(e) =>
              setFormState({
                ...formState,
                dateStarted: e.target.value
              })
            }
            type="text"
            placeholder="Date Started"
          />
          <input
            className="mb2"
            value={formState.dateFinished}
            onChange={(e) =>
              setFormState({
                ...formState,
                dateFinished: e.target.value
              })
            }
            type="text"
            placeholder="Date Finished"
          />
          <input
            className="mb2"
            value={formState.degree}
            onChange={(e) =>
              setFormState({
                ...formState,
                degree: e.target.value
              })
            }
            type="text"
            placeholder="Degree"
          />
           <input
            className="mb2"
            value={formState.university}
            onChange={(e) =>
              setFormState({
                ...formState,
                university: e.target.value
              })
            }
            type="text"
            placeholder="UNiversity"
          />
          
        </div>
        

        <button type="submit"  onClick={ () => {
        createContactInformation()
          clickHistory() //Se llama a la funcion

        } }>New Education</button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createContactInformation();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.language}
            onChange={(e) =>
              setFormState({
                ...formState,
                language: e.target.value
              })
            }
            type="text"
            placeholder="Language"
          />
          <input
            className="mb2"
            value={formState.percentage}
            onChange={(e) =>
              setFormState({
                ...formState,
                percentage: e.target.value
              })
            }
            type="text"
            placeholder="Percentage"
          />
        </div>
        <button type="submit"  onClick={ () => {
        createContactInformation()
          clickHistory() //Se llama a la funcion

        } }>New Language</button>
      </form>



      <form
        onSubmit={(e) => {
          e.preventDefault();
          createContactInformation();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.dataStarted}
            onChange={(e) =>
              setFormState({
                ...formState,
                dataStarted: e.target.value
              })
            }
            type="text"
            placeholder="Date Started"
          />
          <input
            className="mb2"
            value={formState.dataFinished}
            onChange={(e) =>
              setFormState({
                ...formState,
                dataFinished: e.target.value
              })
            }
            type="text"
            placeholder="Date Finishe"
          />
          <input
            className="mb2"
            value={formState.business}
            onChange={(e) =>
              setFormState({
                ...formState,
                business: e.target.value
              })
            }
            type="text"
            placeholder="Business"
          />
          <input
            className="mb2"
            value={formState.titleJob}
            onChange={(e) =>
              setFormState({
                ...formState,
                titleJob: e.target.value
              })
            }
            type="text"
            placeholder="Title Job"
          />
           <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Description"
          />
        </div>
        <button type="submit"  onClick={ () => {
        createContactInformation()
          clickHistory() //Se llama a la funcion

        } }>New Language</button>
      </form>




    </div>
  );
};

export default CreateLink;
