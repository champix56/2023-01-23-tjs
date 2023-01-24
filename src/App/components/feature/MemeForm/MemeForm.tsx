import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import React, { useEffect, useState } from "react";
import Button from "../../ui/Buttonts/Button";
import style from "./MemeForm.module.css";

//types
interface IMemeFormProps {
}

const MemeForm: React.FC<IMemeFormProps> = (props) => {
  return (
    <div data-testid="MemeForm" className={style.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="saisir titre"
          value="props.meme.titre"
        />
        <hr />
        <h2>Image</h2>
        <select>
          <option value="-1">Aucune</option>
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value="props.meme.text"
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={0}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={0}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label><br/>
        <input
          type="color"
          id="f_color"
          value="#000000"
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min={0}
              value={10}
            />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min="100"
              step="100"
              max="900"
              value="props.meme.fontWeight"
            />
          </div>
        </div>
        <div className={style.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={false}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={false}
            />
          </div>
        </div>
        <hr/>
        <div className={style.half}>
          <Button type="reset" bgColor="tomato">
            Reset
          </Button>
          <Button type="submit">save</Button>
        </div>
      </form>
    </div>
  );
};
export default MemeForm;