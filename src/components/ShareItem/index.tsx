"use client";
import { useState } from "react";
import * as S from "./styles";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface LoadingModalProps {
  socialMedia: string;
  shareUrl: string;
}

export const ShareItem = ({ socialMedia, shareUrl }: LoadingModalProps) => {
  const [isCopied, setIsCopied] = useState(false);

  console.log(shareUrl);

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <>
      <S.Container>
        {socialMedia === "Facebook" ? (
          <FacebookShareButton
            style={{ display: "flex", flexDirection: "row" }}
            url={shareUrl}
          >
            <S.Wrapper>
              <S.Left>
                <FacebookIcon size={24} round />
                <S.Text>{socialMedia}</S.Text>
              </S.Left>
              <S.Right>
                <S.Arrow />
              </S.Right>
            </S.Wrapper>
          </FacebookShareButton>
        ) : undefined}
        {socialMedia === "Whatsapp" ? (
          <WhatsappShareButton
            style={{ display: "flex", flexDirection: "row" }}
            url={shareUrl}
            title="Acabei de simular minha aposentadoria! veja os meus resultados estimados pelo link: "
          >
            <S.Wrapper>
              <S.Left>
                <WhatsappIcon size={24} round />
                <S.Text>{socialMedia}</S.Text>
              </S.Left>
              <S.Right>
                <S.Arrow />
              </S.Right>
            </S.Wrapper>
          </WhatsappShareButton>
        ) : undefined}
        {socialMedia === "Twitter" ? (
          <TwitterShareButton
            style={{ display: "flex", flexDirection: "row" }}
            url={shareUrl}
            title="Acabei de simular minha aposentadoria! "
          >
            <S.Wrapper>
              <S.Left>
                <TwitterIcon size={24} round />
                <S.Text>{socialMedia}</S.Text>
              </S.Left>
              <S.Right>
                <S.Arrow />
              </S.Right>
            </S.Wrapper>
          </TwitterShareButton>
        ) : undefined}
        {socialMedia === "Telegram" ? (
          <TelegramShareButton
            style={{ display: "flex", flexDirection: "row" }}
            url={shareUrl}
            title="Acabei de simular minha aposentadoria! "
          >
            <S.Wrapper>
              <S.Left>
                <TelegramIcon size={24} round />
                <S.Text>{socialMedia}</S.Text>
              </S.Left>
              <S.Right>
                <S.Arrow />
              </S.Right>
            </S.Wrapper>
          </TelegramShareButton>
        ) : undefined}
        {socialMedia === "Copiar link" ? (
          <S.Wrapper>
            <CopyToClipboard text={shareUrl} onCopy={handleCopy}>
              <S.Text style={{ cursor: "pointer", margin: 0 }}>
                {isCopied ? "Copiado!" : socialMedia}
              </S.Text>
            </CopyToClipboard>
          </S.Wrapper>
        ) : undefined}
      </S.Container>
    </>
  );
};
