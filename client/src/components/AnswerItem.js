/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { List } from 'semantic-ui-react';

import avatar from '../assets/images/askco-avatar.svg';

const PREVIEW_CHARS = 200;

const AnswerItem = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <List.Item>
      <List.Content>
        <div className="answerTitle">
          <div className="answeredByName">
            <span>A.</span>
            {props.answeredBy || 'AskCo19'}
          </div>
          <img
            src={props.answerByAvatarUrl || avatar}
            className="answeredByIcon"
            alt="answer avatar"
          />
        </div>
        <List.Description>
          {props.answer.length > PREVIEW_CHARS ? (
            <>
              <span className="qAnswer">
                {expanded
                  ? props.answer
                  : `${props.answer.substring(0, PREVIEW_CHARS)}...`}
              </span>
              <br />
              <a onClick={() => setExpanded(!expanded)}>
                Show {expanded ? 'less' : 'more'}
              </a>
            </>
          ) : (
            <>
              <span className="qAnswer">{props.answer}</span>
            </>
          )}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};
export default AnswerItem;
