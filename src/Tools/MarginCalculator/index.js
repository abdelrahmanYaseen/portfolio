import React from 'react'
import { Button } from '../../components/ButtonElement'
import { MCForm, MCInput, MCLabel,MCContainer } from './MarginCalculatorElements'

const MarginCalculator = () => {
    return (
        <MCForm>
            <MCContainer>
                <MCLabel>Capital:</MCLabel>
                <MCInput type="text" name="name" />
            </MCContainer>
            <MCContainer>
                <MCLabel>Leverage:</MCLabel>
                <MCInput type="text" name="name" />
            </MCContainer>
            <MCContainer>
                <MCLabel>Buy Price:</MCLabel>
                <MCInput type="text" name="name" />
            </MCContainer>
            <MCContainer>
                <MCLabel>Sell Price:</MCLabel>
                <MCInput type="text" name="name" />
            </MCContainer>
            <MCContainer>
                <MCLabel>Daily Interest Rate:</MCLabel>
                <MCInput type="text" name="name" />
            </MCContainer>
            <MCContainer>
                <MCLabel>Hold Hours:</MCLabel>
                <MCInput type="text" name="name" />
            </MCContainer>
            <Button>Test</Button>
        </MCForm>
    )
}

export default MarginCalculator
