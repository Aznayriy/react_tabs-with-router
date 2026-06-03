import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const currentActiveTab = tabs.find(tab => tab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === tabId;

            return (
              <li
                key={tab.id}
                className={classNames({ 'is-active': isActive })}
                data-cy="Tab"
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentActiveTab ? currentActiveTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
