const loggerFactory = (loggerLocation: String) => {
  if (!loggerLocation) {
    throw new Error('Logger location is required');
  }

  return {
    error: (...messages: String[]) => {
      console.error(loggerLocation, ...messages);
    },
    info: (...messages: String[]) => {
      console.info(loggerLocation, ...messages);
    },
    warn: (...messages: String[]) => {
      console.warn(loggerLocation, ...messages);
    },
    debug: (...messages: String[]) => {
      console.debug(loggerLocation, ...messages);
    },
    log: (...messages: String[]) => {
      console.log(loggerLocation, ...messages);
    }
  };
};

export default loggerFactory;
