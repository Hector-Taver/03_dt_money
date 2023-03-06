import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const theme = useTheme();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme["green-300"]} />
        </header>

        <strong>R$ 999.999,99</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme["red-300"]} />
        </header>

        <strong>R$ 999.999,99</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>

        <strong>R$ 999.999,99</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
