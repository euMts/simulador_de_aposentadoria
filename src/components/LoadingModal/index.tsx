"use client";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import * as S from "./styles";
import { primaryWhite } from "@/styles/colors";

interface LoadingModalProps {
  isOpen: boolean;
}

export const LoadingModal = ({ isOpen }: LoadingModalProps) => {
  return (
    <>
      <Modal open={isOpen}>
        <S.Container>
          <Box>
            <CircularProgress style={{ color: primaryWhite }} />
          </Box>
        </S.Container>
      </Modal>
    </>
  );
};
