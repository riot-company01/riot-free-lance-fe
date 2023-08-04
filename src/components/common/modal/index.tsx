import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import { useState, useEffect, useRef, forwardRef } from "react";
import type { ReactNode } from "react";
import { BREAK_POINT, COMMON_Z_INDEX } from "@/constants";

export type Size = "middle" | "large" | "fullScreen";

export type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props) => {
  const { children, open, onClose, title } = props;
  const resizeWatchRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [stylingCenter, setStylingCenter] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
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
              <div onClick={onClose}>
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
                {title}
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
  z-index: ${COMMON_Z_INDEX.MODAL - 1};
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
  z-index: ${COMMON_Z_INDEX.MODAL};
`;

const Body = styled.div`
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
