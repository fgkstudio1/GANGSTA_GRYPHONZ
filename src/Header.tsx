/* eslint-disable @typescript-eslint/no-unused-vars */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MintCountdown } from './MintCountdown';
import { toDate, formatNumber } from './utils';
import { CandyMachineAccount } from './candy-machine';

type HeaderProps = {
  candyMachine?: CandyMachineAccount;
};

export const Header = ({ candyMachine }: HeaderProps) => {
  return (
    <Grid container className="mint-header" direction="row" justifyContent="center" wrap="nowrap">
      <Grid container direction="row" wrap="nowrap">
        {candyMachine && (
          <Grid container direction="column" wrap="nowrap">
            <Grid container direction="row"  alignItems="center" justifyContent="space-between">
              <Typography variant="body2"   color="textPrimary">
                Remaining
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{
                  fontWeight: 'bold',
                }}
              >
                {`${candyMachine?.state.itemsRemaining}`}
              </Typography>
            </Grid>
            <Grid container direction="row" alignItems="center"  justifyContent="space-between">
              <Typography variant="body2"  color="textPrimary">
                Price
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{ fontWeight: 'bold' }}
              >
                ◎ {formatNumber.asNumber(candyMachine?.state.price!)}
              </Typography>
            </Grid>
          </Grid>
        )}
    
      </Grid>
    </Grid>
  );
};
