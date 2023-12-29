"use client";
import { Modal } from "@mui/material";
import * as S from "./styles";
import { primaryWhite } from "@/styles/colors";
import { Box } from "../Box";
import { ShareItem } from "../ShareItem";

interface LoadingModalProps {
  isOpen: boolean;
  onClose: any;
  shareUrl: string;
}

export const ShareModal = ({
  isOpen,
  onClose,
  shareUrl,
}: LoadingModalProps) => {
  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <S.Container>
          <Box title="Compartilhar" subTitle="">
            <ShareItem socialMedia="Facebook" shareUrl={shareUrl} />
            <ShareItem socialMedia="Whatsapp" shareUrl={shareUrl} />
            <ShareItem socialMedia="Twitter" shareUrl={shareUrl} />
            <ShareItem socialMedia="Telegram" shareUrl={shareUrl} />
            <ShareItem socialMedia="Copiar link" shareUrl={shareUrl} />
          </Box>
        </S.Container>
      </Modal>
    </>
  );
};
