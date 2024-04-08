import 'product-variants-react/dist/bundle.css';
import { Variations, VariationProvider } from 'product-variants-react';
import generateId from 'product-variants-react/src/utils';

export default function App() {
  return (
    <VariationProvider
      store={{
        variations: [
          {
            id: generateId(),
            name: 'size',
            title: 'Tamaño',
            usage: true,
            values: [],
          },
          {
            id: generateId(),
            name: 'color',
            title: 'Color',
            usage: true,
            values: [],
          },
          {
            id: generateId(),
            name: 'material',
            title: 'Material',
            usage: false,
            values: [],
          },
          {
            id: generateId(),
            name: 'style',
            title: 'Estilo',
            usage: false,
            values: [],
          },
          {
            id: generateId(),
            name: 'pattern',
            title: 'Patrón',
            usage: false,
            values: [],
          },
          {
            id: generateId(),
            name: 'length',
            title: 'Longitud',
            usage: false,
            values: [],
          },
          {
            id: generateId(),
            name: 'width',
            title: 'Ancho',
            usage: false,
            values: [],
          },
        ],
        variationsSelected: [
          {
            id: generateId(),
            name: 'size',
            title: 'Tamaño',
            usage: true,
            values: [
              { id: generateId(), title: 'S' },
              { id: generateId(), title: 'M' },
              { id: generateId(), title: 'L' },
            ],
          },
          {
            id: generateId(),
            name: 'color',
            title: 'Color',
            usage: true,
            values: [
              { id: generateId(), title: 'Red' },
              { id: generateId(), title: 'Blue' },
              { id: generateId(), title: 'Green' },
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
