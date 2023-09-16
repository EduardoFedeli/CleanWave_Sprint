import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const sendToAnalytics = ({ name, delta, value, id }) => {
  // Implemente aqui o código para enviar as métricas para sua ferramenta de análise (por exemplo, Google Analytics).
  console.log({ name, delta, value, id });
};

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
