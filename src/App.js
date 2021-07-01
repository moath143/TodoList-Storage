import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Formtask from "./components/Formtask/Formtask";
import Tasklist from "./components/Tasklist/Tasklist";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import dataReducer from "./reducers/dataReducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/lib/integration/react";



function App() {
  const persistConfig = {
    key: 'root',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, dataReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store)
  // const store = createStore(dataReducer);
  return (
    <section>
      <div className="container text-center">
        <div className="row">
          <h1>Todo List App</h1>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Navbar />
              <Formtask />
              <Tasklist />
            </PersistGate>
          </Provider>
        </div>
      </div>
    </section>
  );
}

export default App;
