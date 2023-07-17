import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import ModalColaborador from "./ModalColaborador";
import ModalGerenciarColaborador from "./ModalGerenciarColaborador";

function MenuColaborador() {
  const [isOpenModalCadastrar, setIsOpenCadatrarColaborador] = useState(false);
  const [isOpenModalGerenciar, setIsOpenGerenciarColaborador] = useState(false);

  return (
    <div>
      {isOpenModalCadastrar && (
        <ModalColaborador
          isOpen={isOpenModalCadastrar}
          heEditar={false}
          colaboradorId={null}
          onColaboradorChange={() => null}
          onClose={() => setIsOpenCadatrarColaborador(false)}
        />
      )}

      {isOpenModalGerenciar && (
        <ModalGerenciarColaborador
          isOpen={isOpenModalGerenciar}
          onClose={() => setIsOpenGerenciarColaborador(false)}
        />
      )}

      <Menu>
        <MenuButton as={Button} leftIcon={<ChevronDownIcon />}>
          Coborador
        </MenuButton>
        <MenuList color="black">
          <MenuItem onClick={() => setIsOpenCadatrarColaborador(true)}>
            Cadastrar
          </MenuItem>
          <MenuItem onClick={() => setIsOpenGerenciarColaborador(true)}>
            Gerenciar colaboradores
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default MenuColaborador;
