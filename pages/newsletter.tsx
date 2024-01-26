import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange(event) {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      })
    }
  };
}

export default function NewsletterScreen() {
  const form = useForm({
    initialValues: {
      emailNewsletter: ""
    }
  });

  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!form.values.emailNewsletter.includes("@")) {
            alert("Você preicsa informar um email valido!")
            return;
          }
          alert("Você foi cdastrado com sucesso! Cheque seu email para garantir.")
        }}
      >
        <Box
          styleSheet={{
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
            padding: "16px"
          }}
        >
          <Image
            src="https://github.com/kayoennrique.png"
            alt="Foto do Kayo Ennrique"
            styleSheet={{
              borderRadius: "100%",
              width: "100px",
              marginBottom: "16px"
            }}
          />
          <Text variant="heading4">
            Newsletter do Kayo Ennrique
          </Text>
          <NewsletterTextField
            placeholder="Informe seu email"
            name="emailNewsletter"
            value={form.values.emailNewsletter}
            onChange={form.handleChange}
          />
          <Box>
            <Text>
              Seu email é: {form.values.emailNewsletter}
            </Text>
          </Box>
          <Button fullWidth styleSheet={{ marginTop: "16px" }}>
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>
  )
}

interface NewsletterTextFieldProps {
  placeholder?: string;
  value?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function NewsletterTextField(props: NewsletterTextFieldProps) {
  return (
    <Box
      styleSheet={{
        maxWidth: "300px",
        width: "100%"
      }}
    >
      <BaseComponent
        as="input"
        {...props}
        styleSheet={{
          border: "1px solid rgb(195,195,195)",
          borderRadius: "4px",
          padding: "8px",
          width: "100%"
        }}
      />
    </Box>
  )
}
