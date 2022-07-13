/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Content, Header, HeaderLabel, Page } from '@backstage/core-components';
import { ApolloExplorer as ApolloExplorerReact } from '@apollo/explorer/react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  explorer: {
    height: '100%',
  },
}));

type Props = {
  graphRef: string;
};

export const ApolloExplorer = ({ graphRef }: Props) => {
  const classes = useStyles();
  return (
    <Page themeId="tool">
      <Header title="Welcome to apollo-explorer!" subtitle="Optional subtitle">
        <HeaderLabel label="Owner" value="Team X" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <ApolloExplorerReact
          className={classes.explorer}
          // graphRef="Github-API-ikji88@current"
          graphRef={graphRef}
          persistExplorerState
        />
      </Content>
    </Page>
  );
};
