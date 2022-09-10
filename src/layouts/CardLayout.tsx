import { Layout } from '../shared/ui/Layout';
import { Navbar, Link } from '@nextui-org/react';
import React from 'react';
interface ICardLayoutProps {
  children: React.ReactNode;
}

export const CardLayout = ({ children }: ICardLayoutProps) => {
  return (
    <Layout>
      <Navbar>
        <Navbar.Content>
          <Navbar.Link>Валюты</Navbar.Link>
          <Navbar.Link>Лента</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {children}
    </Layout>
  );
};
