import styled from 'styled-components';

import {
  bodyBgBlack,
  fontColorWhite,
  buttonSkyBlue,
} from '../../styles/variables';

export const ItemsUi = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  color: ${fontColorWhite};
  background: ${buttonSkyBlue};
  cursor: pointer;

  div {
    opacity: 0;
  }

  &:hover {
    background: linear-gradient(${bodyBgBlack + 80}, ${bodyBgBlack + 80})
        no-repeat center/100%,
      ${buttonSkyBlue};

    div {
      opacity: 100;
    }
  }
`;

export const LikeUi = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
    font-size: 22px;
  }
`;

export const CommentUi = styled(LikeUi)`
  margin-left: 15px;
`;
