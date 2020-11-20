import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import UserSelector from './UserSelector';
import ReasonSelector from './ReasonSelector';
import { downloadBlob } from '../js/dom-utils';
import { generatePdf } from '../js/pdf-util';
import { UserType, UserConfigType } from '../config/types';
import pdfBase from '../certificate.pdf';

const Form = () => {
  const generate = async () => {
    if (userData && userData.profile) {
      const userProfile = userData.profile;
      // set current date and hour
      const now = new Date();
      userProfile.datesortie = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      userProfile.heuresortie = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
      // generate pdf
      const pdfBlob = await generatePdf(userProfile, reason, pdfBase);
      const creationDate = now.toLocaleDateString('fr-CA');
      const creationHour = now
        .toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        })
        .replace(':', '-');
        // download pdf
      downloadBlob(pdfBlob, `attestation-${creationDate}_${creationHour}.pdf`);
    } else {
      // TODO handle error
    }
  }
  const handleUserSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser(e.target.value);
  }
  const handleReasonSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.currentTarget.value);
  }
  const [user, setUser] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);
  const [reason, setReason] = React.useState<string>('');
  const [userData, setUserData] = React.useState<UserType | null>(null);
  const [userConfig, setUserConfig] = React.useState<UserConfigType | null>(null);

  useEffect(() => {
    const getDefaultUser = () => (
      document.location.search.replace('?p=', '')
        || (
          (userConfig && userConfig.defaultUser && userConfig.users && userConfig.users[userConfig.defaultUser])
            ? userConfig.defaultUser
            : ''
        )
    )
    if (userConfig) {
      // update user data
      if(user !== '') {
        const userData: UserType = userConfig.users[user];
        setUserData(userData);
        if(userData && userData.settings && userData.settings.defaultChoice) {
          setReason(userData.settings.defaultChoice);
        } else {
          setReason(userData.settings.choices[0]);
        }
      } else {
        setUser(getDefaultUser());
      }
    }
  }, [userConfig, user]);

  useEffect(() => {
    const fetchData = async () => {
      // load users config
      await axios.get(`${document.location.pathname}/users.json`)
        .then(function (response: AxiosResponse) {
          setUserConfig(response.data);
          setError(null);
        })
        .catch(function (error) {
          setError('Une erreur s\'est produite dans le chargement des données');
          console.error(error);
        });
    }
    fetchData();
  }, []);

  return (
    <form>
      { error ? <div className="alert alert-danger">{error}</div> : null}
      <UserSelector
        users={(userConfig && userConfig.users) ? userConfig.users : {}}
        currentUser={user}
        onChange={handleUserSelect}
      />
      <ReasonSelector currentReason={reason} reasons={(userData && userData.settings && userData.settings.choices) ? userData.settings.choices : null}
        onChange={handleReasonSelect} />
      <button type="button" className="btn btn-info btn-lg btn-block"
        id="generate-btn" onClick={generate}>
          Générer
      </button>
    </form>
  );
}

export default Form;
