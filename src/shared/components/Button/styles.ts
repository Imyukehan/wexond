import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

import opacity from '../../defaults/opacity';

import { invertColors } from '../../mixins/icons';
import images from '../../mixins/images';
import typography from '../../mixins/typography';
import shadows from '../../mixins/shadows';

import { ButtonType } from '../../enums';

const getPadding = (icon: boolean) => (icon ? 8 : 16);

const isTransparent = (type: ButtonType) =>
  type === ButtonType.Outlined || type === ButtonType.Text;

const getBorder = () => `1px solid rgba(0, 0, 0, ${opacity.light.dividers})`;

export interface StyledButtonProps {
  background: string;
  foreground: string;
  icon: boolean;
  type: ButtonType;
}

export const StyledButton = styled.div`
  display: inline-flex;
  min-width: 64px;
  height: 36px;
  padding-right: 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: 0.2s box-shadow;
  font-size: 14px;
  white-space: nowrap;

  ${typography.robotoMedium()}
  background-color: ${({ background, type }: StyledButtonProps) =>
    (isTransparent(type) ? 'transparent' : background)};
  color: ${({ foreground }) => foreground};
  border: ${({ type }) => (type === ButtonType.Outlined ? getBorder() : 'unset')};
  box-shadow: ${({ type }) => (isTransparent(type) ? 'unset' : shadows(2))};
  padding-left: ${({ icon }) => getPadding(icon)}px;

  &:hover .over-shade {
    opacity: 0.12;

    box-shadow: ${({ type }) => (isTransparent(type) ? 'unset' : shadows(3))};
  }
`;

export interface IconProps {
  src: string;
  white: boolean;
}

export const Icon = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 4px;
  margin-right: 8px;

  ${images.center('18px', 'auto')}
  background-image: url(${({ src }: IconProps) => src});
  ${({ white }) => invertColors()});
`;

export interface OverShadeProps {
  color: string;
}

export const OverShade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.2s opacity;

  background-color: ${({ color }: OverShadeProps) => color};
`;