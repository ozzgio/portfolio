import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StyledChip = styled(Box)`
    display: inline-flex;
    font-size: md;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
    border-width: 2px;
    border-style: solid;
    border-color: gray;
    float: left;

    img {
        margin-right: 0.5rem;
        height: 1.5rem;
        width: 1.5rem;
        object-fit: cover;
    }
`;

const Chip = ({ label, imageSrc }) => {
    return (
        <StyledChip>
            {imageSrc && <Image src={imageSrc} alt="" />}
            {label}
        </StyledChip>
    );
};

export default Chip;
