const isTripleSlashDirective = (comment) =>
    comment.type === 'Line' && comment.value.startsWith('/');

const isTagAnnotationsOnly = (comment) => {
    if (comment.type !== 'Block' || !comment.value.startsWith('*')) {
        return false;
    }

    const lines = comment.value
        .split('\n')
        .map((line) => line.replace(/^[\s*]+/, '').trimEnd())
        .filter((line) => line.length > 0);

    return lines.length > 0 && lines.every((line) => line.startsWith('@'));
};

const noComments = {
    meta: {
        fixable: 'code',
    },
    create(context) {
        return {
            Program() {
                for (const comment of context.sourceCode.getAllComments()) {
                    if (
                        isTripleSlashDirective(comment) ||
                        isTagAnnotationsOnly(comment)
                    ) {
                        continue;
                    }

                    context.report({
                        loc: comment.loc,
                        message:
                            'Comments are not allowed in JS/TS sources, except @-tag annotations.',
                        fix(fixer) {
                            return fixer.removeRange(comment.range);
                        },
                    });
                }
            },
        };
    },
};

export default {
    meta: {
        name: 'local',
    },
    rules: {
        'no-comments': noComments,
    },
};
