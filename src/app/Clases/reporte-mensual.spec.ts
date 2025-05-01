import { ReporteMensual } from '../Clases/reporte-mensual';

describe('ReporteMensual', () => {
  it('should create an instance', () => {
    const reporte = new ReporteMensual(
      1, 
      2023, 
      [], 
      [], 
      []
    );
    expect(reporte).toBeTruthy();
  });
});