import styled, { css } from "styled-components"
import CardImage from "../../assets/card_dark.svg"

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: stretch;

	max-width: 450px;
	width: 100%;
	height: 100px;

	margin: 1rem;

	border: 1px solid var(--vanilla);
	border-radius: 16px;
	box-sizing: border-box;

	overflow: hidden;

	@media (min-width: 768px) {
		height: 125px;
	}
`

export const ImageContainer = styled.div`
	background: url(${CardImage}) no-repeat center, var(--dark-green);
	width: 100px;
`

export const ContentContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	box-sizing: border-box;

	padding: 8px;
	width: calc(100% - 100px);

	background-color: var(--vanilla);

	font-size: var(--card-text-size);

	header {
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;

		button {
			font-size: 20px;
			outline: none;
			background: transparent;
			border: none;
			margin-right: 4px;

			svg {
				color: var(--medium-gray);
				transition: 0.3s all ease;
			}
		}
		button.completed {
			svg {
				color: ${(props) =>
					props.achieved ? css`var(--light-green)` : css`var(--medium-gray))`};
			}
		}

		button.achieved:hover svg {
			color: var(--light-green);
		}

		button.completed:hover svg {
			color: var(--light-green);
		}

		button.delete:hover svg {
			color: var(--red);
		}
	}

	h4 {
		color: var(--dark-green);
		font-size: var(--card-title-size);
	}

	p {
		color: var(--light-green);
	}
`
