import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'


export function SquareNestedBlocks() {

    return (
        <Box display='flex' flexDirection='row'>
            <Box flex="100%">
                <Typography variant='h3' component="h1">
                    Coding Challenge: Recursive Square Bracket Collapsing
                </Typography>
                <Typography variant='h4' component="h2">Problem Description</Typography>
                <Typography variant='body1'>
                    You are given a string that may contain zero or more substrings enclosed in square brackets ([ and ]). These bracketed substrings may be nested.

                    Your task is to implement a function that collapses all bracketed content, including nested brackets, into a single placeholder string: [...].

                    The collapsing must treat nested brackets as part of the same outer block. In other words, once an opening bracket [ is encountered, everything up to its matching closing bracket ] must be replaced by exactly one instance of [...], regardless of nesting depth.
                </Typography>
                <Typography variant='h4' component="h2">Requirements</Typography>
                <List component='ol' sx={{ listStyleType: "decimal", pl: 4 }} dense>
                    <ListItem component="li" sx={{ display: 'list-item' }} dense>
                        <ListItemText slotProps={{ primary: { variant: 'body1' } }}>Replace every complete bracketed block with [...].</ListItemText>
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }} dense>
                        <ListItemText>Nested brackets must be handled correctly.</ListItemText>
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }} dense>
                        <ListItemText>Only the outermost bracketed block should produce a single [...].</ListItemText>
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }} dense>
                        <ListItemText>Text outside brackets must remain unchanged.</ListItemText>
                    </ListItem>
                    <ListItem sx={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        display: 'list-item',
                    }} dense>
                        <ListItemText>You may assume:</ListItemText>
                        <List component='ul' sx={{ listStyleType: "disc", pl: 4 }}>
                            <ListItem sx={{ display: 'list-item' }} dense>
                                <ListItemText>The input string contains only valid bracket pairs.</ListItemText>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }} dense>
                                <ListItemText>Brackets are properly balanced.</ListItemText>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }} dense>
                        <ListItemText>The solution should run in O(n) time complexity, where n is the length of the string.</ListItemText>
                    </ListItem>
                    <ListItem component="li" sx={{ display: 'list-item' }} dense>
                        <ListItemText>Do not use regular expressions that rely on recursive patterns</ListItemText>
                    </ListItem>
                </List>
            </Box>

            <Box flex="100%">
                <Typography variant='body1' >
                    Code results
                </Typography>
            </Box>
        </Box>
    )
}
