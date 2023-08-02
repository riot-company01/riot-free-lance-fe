import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";

import type { ReactNode } from "react";
import { useLayoutEffect, useState, useEffect, useRef, forwardRef } from "react";
import { BREAK_POINT } from "@/constants";

export type Size = "middle" | "large" | "fullScreen";

export type ModalProps = {
  children: ReactNode;
  open: boolean;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props) => {
  const { children, open } = props;
  const resizeWatchRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [stylingCenter, setStylingCenter] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const router = useRouter();
  useLayoutEffect(() => {
    if (!open) return;
    if (modalRef.current === null) return;

    if (modalRef.current.scrollTop === 0) {
      modalRef.current.scrollTop = 1;
    }
    setStylingCenter(modalRef.current.scrollTop === 0);
  }, [open, contentHeight]);

  useEffect(() => {
    if (!open) return;
    if (resizeWatchRef.current === null) return;
    const observer = new ResizeObserver(([entry]) => {
      setContentHeight(entry.contentRect.height);
    });
    observer.observe(resizeWatchRef.current);
    return () => {
      observer.disconnect();
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <Overlay />
      <Layout ref={modalRef} stylingCenter={stylingCenter}>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <div
                onClick={() => {
                  router.back();
                }}
              >
                <ArrowBackIcon fontSize="medium" />
              </div>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  mr: 2,
                  display: "flex",
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                案件詳細
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Body ref={resizeWatchRef}>{children}</Body>
      </Layout>
    </>
  );
});

Modal.displayName = "Modal";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  z-index: 10001;
  box-sizing: content-box;
  background: rgba(0, 0, 0, 0.8);
`;

const Layout = styled.div<{
  stylingCenter: boolean;
}>`
  position: fixed;
  overflow: auto;
  overscroll-behavior: contain;
  height: 100vh;
  height: calc(var(--1dvh, 1vh) * 100);
  height: 100dvh;
  border-radius: 0px;
  @media screen and (min-width: ${BREAK_POINT.sm}px) {
    height: 90vh;
    height: calc(var(--1dvh, 1vh) * 90);
    height: 90dvh;
    border-radius: 8px;
  }
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 736px;
  transform: translate(-50%, -50%);
  z-index: 10002;
`;

const Body = styled.div`
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
