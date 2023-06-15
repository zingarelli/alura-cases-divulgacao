import { theme } from '../../../theme/theme';
import { Box, Text } from '../../../theme/components';

export default function Footer() {
    return (
        <Box
            as="footer"
            styleSheet={{
                backgroundColor: theme.colors.neutral[900]
            }}
        >
            <Box
                styleSheet={{
                    overflow: "hidden",
                    maxWidth: theme.space.xcontainer_xl,
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingVertical: {
                        xs: theme.space.x12,
                    },
                    paddingHorizontal: {
                        xs: theme.space.x4,
                        sm: theme.space.x6,
                        lg: theme.space.x8,
                    },
                }}
            >
                <Text
                    as="p"
                    styleSheet={{
                        textVariant: theme.typography.variants.body3,
                        textAlign: "center",
                        color: theme.colors.neutral[400],
                    }}
                >
                    &copy; {new Date().getFullYear()} DevSoutinho. Todos os direitos reservados.
                </Text>
                <Text
                    as="p"
                    styleSheet={{
                        textVariant: theme.typography.variants.body3,
                        textAlign: "center",
                        color: theme.colors.neutral[400],
                    }}
                >
                    Desenvolvido no curso <a href="https://www.alura.com.br/curso-online-next-js-iniciando-framework" style={{color: '#724BB7'}}> Next.js: explorando o framework</a>
                </Text>
            </Box>
        </Box>
    )
}