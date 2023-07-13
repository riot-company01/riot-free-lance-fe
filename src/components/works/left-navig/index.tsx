import styled from "@emotion/styled";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormGroup, FormControlLabel, Checkbox as _Checkbox } from "@mui/material";
import { useState } from "react";

export function LeftNavig() {
  const [isOpen, setIsOpen] = useState(true);
  ExpandMoreIcon;
  return (
    <div>
      <Head>
        <div>FW/LIB</div>
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
        </div>
      </Head>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>React.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Next.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Vue.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Nuxt.js</Label>} />
        <More>もっと見る</More>
      </FormGroup>
      <Head>
        <div>FW/LIB</div>
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
        </div>
      </Head>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>React.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Next.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Vue.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Nuxt.js</Label>} />
        <More>もっと見る</More>
      </FormGroup>
      <Head>
        <div>FW/LIB</div>
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
        </div>
      </Head>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>React.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Next.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Vue.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Nuxt.js</Label>} />
        <More>もっと見る</More>
      </FormGroup>
      <Head>
        <div>FW/LIB</div>
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
        </div>
      </Head>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>React.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Next.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Vue.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Nuxt.js</Label>} />
        <More>もっと見る</More>
      </FormGroup>
      <Head>
        <div>FW/LIB</div>
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
        </div>
      </Head>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>React.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Next.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Vue.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Nuxt.js</Label>} />
        <More>もっと見る</More>
      </FormGroup>
      <Head>
        <div>FW/LIB</div>
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
        </div>
      </Head>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>React.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Next.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Vue.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Nuxt.js</Label>} />
        <More>もっと見る</More>
      </FormGroup>
      <Head>
        <div>FW/LIB</div>
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
        </div>
      </Head>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>React.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Next.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Vue.js</Label>} />
        <FormControlLabel control={<Checkbox size="small" />} label={<Label>Nuxt.js</Label>} />
        <More>もっと見る</More>
      </FormGroup>
    </div>
  );
}

const Label = styled.div`
  font-size: 12px;
`;

const Checkbox = styled(_Checkbox)`
  svg {
    font-size: 16px;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const More = styled.div`
  font-size: 14px;
  text-align: right;
`;
