import 'product-variants-react/dist/bundle.css';
import { Variations, VariationProvider } from 'product-variants-react';

export default function App() {
  return (
    <VariationProvider
      store={{
        variations: [
          {
            id: 'customSizeId',
            name: 'size',
            title: 'Tamaño',
            usage: true,
          },
          {
            id: 'customColorId',
            name: 'color',
            title: 'Color',
            usage: true,
          },
          {
            id: 'customStyleId',
            name: 'material',
            title: 'Material',
            usage: false,
          },
          {
            id: 'customPatternId',
            name: 'style',
            title: 'Estilo',
            usage: false,
          },
          {
            id: 'customLengthId',
            name: 'pattern',
            title: 'Patrón',
            usage: false,
          },
          {
            id: 'customWidthId',
            name: 'length',
            title: 'Longitud',
            usage: false,
          },
          {
            id: 'customHeightId',
            name: 'width',
            title: 'Ancho',
            usage: false,
          },
        ],
        variationsSelected: [
          {
            id: 'customSizeId',
            name: 'size',
            title: 'Tamaño',
            usage: true,
            values: [
              { id: 'medium', title: 'X' },
              { id: 'large', title: 'XL' },
              { id: 'small', title: 'S' },
              { id: 'extra-large', title: 'XXL' },
              { id: 'extra-small', title: 'XS' },
            ],
          },
          {
            id: 'customColorId',
            name: 'color',
            title: 'Color',
            usage: true,
            values: [
              { id: 'blue', title: 'Azul' },
              { id: 'red', title: 'Rojo' },
              { id: 'green', title: 'Verde' },
              { id: 'yellow', title: 'Amarillo' },
            ],
          },
        ],
      }}
    >
      <div className="max-w-3xl p-4 mx-auto">
        <Variations defaultPrice={100} defaultStock={10} />
      </div>
    </VariationProvider>
  );
}
