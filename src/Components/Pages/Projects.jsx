import { Grid, Card } from '@geist-ui/core'

export default function() {
  return (
    <article>
      <h1>Projects</h1>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}>
          <Card shadow width="100%"></Card>
        </Grid>
      </Grid.Container>
    </article>
  )
}