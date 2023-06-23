import styled from "@emotion/styled";

export const DivWrapper = styled.div`
  margin: 40px;
  padding: 36px;
  border-bottom: solid 6px #edf4fc;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.7);
  border-radius: 9px;
`;

export const HeadProjectName = styled.h2`
  text-align: center;
`;

export const DivKeywordWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
`;

// export const DivBasicInfo = styled.div`
//   border: solid 4px #edf4fc;
//   margin-bottom: 16px;
// `;

export const SecBasicInfoWrapper = styled.section`
  height: 48px;
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 699px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeadBasicInfo = styled.h3`
  @media (min-width: 700px) {
    padding: 8px;
    width: 164px;
    height: 32px;
  }
  background-color: #edf4fc;
`;

export const PerBasicInfo = styled.p`
  padding-left: 16px;
`;

export const DivButtonWrapper = styled.div`
  margin-top: 16px;
  @media (max-width: 599px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-around;
  }
`;
