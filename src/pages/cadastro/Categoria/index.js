import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CadastroCategoria() {
    return(
      <PageDefault>
        <h1> Cadastro de video </h1>
        
        <form>

          <label>
            nome da categoria:
            <input 
               type="text"
            />
          </label>

          <button>
            cadastrar
          </button>

        </form>
        
        <Link to="/">
            ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;