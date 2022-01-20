import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <MaxWidthWrapper>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <Logo />
            <SubscriberActions>
              <Button>
                Subscribe
              </Button>
              <SubscriberText>
                Already a subscriber?
              </SubscriberText>
            </SubscriberActions>
          </Row>
        </MaxWidthWrapper>
      </DesktopHeader>
    </>
  );
};

const MobileHeader = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled.header`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
    margin-top: 32px;
    margin-bottom: 48px;
  }
`;

const SubscriberActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`;

const SubscriberText = styled.a`
  font-style: italic;
  text-decoration: underline;
  font-size: 0.875rem;
  color: ${COLORS.gray[900]}
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
