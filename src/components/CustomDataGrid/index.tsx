import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent, Stack, TablePagination, Typography } from '@mui/material';

type Props = {
  rows: any;
  columns: any;
  title?: any;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  pagelength?: any;
  checkboxSelection?: any;
  disableRowSelectionOnClick?: any;
  disableColumnSelector?: any;
  isloading?: any
  page?: any
  handleChangePage?: any
  rowsPerPage?: any;
  handleChangeRowsPerPage?: any
};

export default function CustomDataGrid({
  title,
  subtitle,
  action,
  footer,
  rows,
  columns,
  checkboxSelection,
  disableColumnSelector,
  isloading,
  pagelength,
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage
}: Props) {
  return (
    <Card
      sx={{ padding: 0, marginBottom: '20px', width: '100%' }}
      elevation={9}
      variant={undefined}
    >
      <CardContent sx={{ p: '30px' }}>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='space-between'
          alignItems={'center'}
          mb={3}
        >
          <Box>
            {title ? <Typography variant='h5'>{title}</Typography> : ''}

            {subtitle ? (
              <Typography variant='subtitle2' color='textSecondary'>
                {subtitle}
              </Typography>
            ) : (
              ''
            )}
          </Box>
          {action}
        </Stack>
        <div>
        <div className='text-md' style={{ height: '60vh', width: '100%' }}>
          <DataGrid
          loading={isloading}
            rows={rows}
            columns={columns}
            checkboxSelection={checkboxSelection}
            disableRowSelectionOnClick={false}
            disableColumnSelector={disableColumnSelector}
            hideFooterPagination={true}
            hideFooterSelectedRowCount={true}
          />
        </div>
        <TablePagination
  component="div"
  count={pagelength}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
  rowsPerPageOptions={[10, 25, 50, 100]}
/>
        </div>
        {footer}
      </CardContent>
    </Card>
  );
}
