import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Header from '../../molecules/Header';
import ScreenWrapper from '../../molecules/ScreenWrapper';
import { Heading, Text, Icon, Input } from '../../atoms';
import { COMPLETED_FORMS_KEY } from '../../../services/StorageService';
import forms from '../../../assets/forms';

const TaskDetailScreenWrapper = styled(ScreenWrapper)`
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 150px;
  overflow: auto;
`;

const List = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const ListHeading = styled(Heading)`
  margin-left: 4px;
  margin-bottom: 8px;
`;

// TODO: Lift out Field Component
// eslint-disable-next-line react/prop-types
const Field = ({ label, icon, input }) => (
  <FieldWrapper>
    {label && <FieldLabel>{label}</FieldLabel>}

    <FieldInputWrapper>
      {icon && <FieldInputIcon name={icon} />}
      <FieldInput {...input} />
    </FieldInputWrapper>
  </FieldWrapper>
);

const FieldWrapper = styled.div`
  padding-top: 15px;
`;

const FieldLabel = styled(Text)`
  margin-bottom: 5px;
  margin-left: 4px;
  margin-right: 10px;
  font-weight: normal;
  font-size: 14px;
`;

const FieldInputWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${Input.css}
  padding: 10px;
  padding-left: 5px;
`;

const FieldInputIcon = styled(Icon)`
  font-size: 16px;
  color: #999;
`;

const FieldInput = styled.input`
  padding-left: 5px;
  outline: none;
  border: none;
`;

// eslint-disable-next-line react/prop-types
const TaskDetailScreen = ({ className, resource, groups, match, history, ...rest }) => {
  // eslint-disable-next-line react/prop-types
  const { params } = match;
  const { storageData } = resource;

  // TODO: Break data processing out of component.
  // This component should only care about getting answers and form data.
  const completedForms = storageData[COMPLETED_FORMS_KEY];
  const completedForm =
    completedForms && !completedForms.loading
      ? completedForms.data.find(form => form.id === parseInt(params.id))
      : {};
  const formData = completedForm ? forms.find(form => form.id === completedForm.formId) : {};
  const questions = formData ? formData.questions : [];
  const answers = completedForm.data;
  if (!formData) {
    return null;
  }

  // TODO: ERSÄTT DENNA KOD PRONTO
  // PR 100!
  // OBS! Riktigt haxig fungerande kod, YOCO (Yoda Only Code Once)
  const filteredQuestions =
    questions &&
    questions.map(q => {
      switch (q.id) {
        case 'partnerAddress':
          if (answers.partnerSameAddress === 'Ja') {
            return { ...q, details: { ...q.details, show: false } };
          }
          break;

        case 'partnerCity':
          if (answers.partnerSameAddress === 'Ja') {
            return { ...q, details: { ...q.details, show: false } };
          }
          break;

        case 'partnerPostal':
          if (answers.partnerSameAddress === 'Ja') {
            return { ...q, details: { ...q.details, show: false } };
          }
          break;

        case 'partnerSameAddress':
          if (answers.partnerSameAddress === 'Ja') {
            return {
              ...q,
              details: {
                group: 'partner',
                label: 'Gemensam address',
                icon: 'location-on',
                show: true,
              },
            };
          }

          break;

        case 'weddingLocationCustom':
          if (answers.weddingLocation === 'Rådhuset i Helsingborg') {
            return { ...q, details: { ...q.details, show: false } };
          }
          break;

        case 'weddingLocation':
          if (answers.weddingLocation === 'Egen vald plats') {
            return { ...q, details: { ...q.details, show: false } };
          }
          break;

        case 'guestsTotal':
          if (answers.weddingLocation === 'Egen vald plats') {
            return { ...q, details: { ...q.details, show: false } };
          }
          break;

        default:
          break;
      }

      return q;
    });

  // END OF HAX KOD

  // TODO: Ersätt filtredQuestions från hax koden längre upp.
  const groupsWithAnswers =
    filteredQuestions &&
    groups.reduce((acc, group) => {
      const groupQuestions = filteredQuestions.filter(
        question =>
          question.details && question.details.show && question.details.group === group.name
      );

      group.questions = groupQuestions;

      return [...acc, group];
    }, []);

  return (
    <TaskDetailScreenWrapper className={className}>
      <Header
        title={formData.name}
        themeColor="purple"
        backButton={{
          text: 'Ärenden',
          // eslint-disable-next-line react/prop-types
          onClick: () => history.goBack(),
        }}
      />
      <Container>
        {groupsWithAnswers.map(group => (
          <List key={group.title}>
            <ListHeading type="h3">{group.title}</ListHeading>
            {group.questions.map(question => (
              <Field
                key={question.id}
                label={question.details.label}
                icon={question.details.icon}
                input={{
                  editable: false,
                  value: answers[question.id],
                }}
              />
            ))}
          </List>
        ))}
      </Container>
    </TaskDetailScreenWrapper>
  );
};

TaskDetailScreen.propTypes = {
  className: PropTypes.string,
  answers: PropTypes.shape({}),
  resource: PropTypes.shape({
    storageData: PropTypes.shape({}),
  }),
  groups: PropTypes.arrayOf(PropTypes.shape({})),
};

TaskDetailScreen.defaultProps = {
  className: '',
  answers: {},
  resource: {},
  groups: [
    {
      name: 'partner',
      title: 'Make/Maka',
    },
    {
      name: 'wedding',
      title: 'Om vigseln',
    },
    {
      name: 'witness',
      title: 'Vittnen',
    },
  ],
};

export default TaskDetailScreen;
